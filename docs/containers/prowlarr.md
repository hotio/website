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
<tr><td><div id="tag18312" onclick="CopyToClipboard('tag18312');return false;" class="tag-decoration">nightly</div><div id="tag780" onclick="CopyToClipboard('tag780');return false;" class="tag-decoration">nightly-19957ba</div><div id="tag26299" onclick="CopyToClipboard('tag26299');return false;" class="tag-decoration">nightly-2.5.1.5469</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/19957ba61822acceb3648894ad36b7f012805edf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29322910638" target="_blank">2026-07-14 09:45:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7919" onclick="CopyToClipboard('tag7919');return false;" class="tag-decoration">release</div><div id="tag18549" onclick="CopyToClipboard('tag18549');return false;" class="tag-decoration">release-dab413b</div><div id="tag13385" onclick="CopyToClipboard('tag13385');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/dab413bb6989c0198ab669084e6230e141f95359" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29360222840" target="_blank">2026-07-14 19:01:32</a></td></tr>
<tr><td><div id="tag3888" onclick="CopyToClipboard('tag3888');return false;" class="tag-decoration">testing</div><div id="tag12793" onclick="CopyToClipboard('tag12793');return false;" class="tag-decoration">testing-3bfb6b8</div><div id="tag31745" onclick="CopyToClipboard('tag31745');return false;" class="tag-decoration">testing-2.5.1.5464</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/3bfb6b847b1ecc58e453c123f747e66cebfdfa69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29322910957" target="_blank">2026-07-14 09:45:50</a></td></tr>
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
