---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag15447" onclick="CopyToClipboard('tag15447');return false;" class="tag-decoration">nightly</div><div id="tag17673" onclick="CopyToClipboard('tag17673');return false;" class="tag-decoration">nightly-d621650</div><div id="tag30282" onclick="CopyToClipboard('tag30282');return false;" class="tag-decoration">nightly-2.5.2.5485</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/d62165067c42c427bfa8828a714124ef9dcb74fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29699404230" target="_blank">2026-07-19 18:50:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13551" onclick="CopyToClipboard('tag13551');return false;" class="tag-decoration">release</div><div id="tag23294" onclick="CopyToClipboard('tag23294');return false;" class="tag-decoration">release-263fbf8</div><div id="tag15358" onclick="CopyToClipboard('tag15358');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/263fbf84bcc83b48c81b8c47a9a9b447a05b87f2" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29681269655" target="_blank">2026-07-19 09:15:51</a></td></tr>
<tr><td><div id="tag31048" onclick="CopyToClipboard('tag31048');return false;" class="tag-decoration">testing</div><div id="tag4849" onclick="CopyToClipboard('tag4849');return false;" class="tag-decoration">testing-ffb57b3</div><div id="tag12742" onclick="CopyToClipboard('tag12742');return false;" class="tag-decoration">testing-2.5.2.5483</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/ffb57b3ecb5ed51098284ac1d989f460df3ca7b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29699402973" target="_blank">2026-07-19 18:50:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
