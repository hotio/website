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
<tr><td><div id="tag32041" onclick="CopyToClipboard('tag32041');return false;" class="tag-decoration">nightly</div><div id="tag17183" onclick="CopyToClipboard('tag17183');return false;" class="tag-decoration">nightly-85d02b6</div><div id="tag18535" onclick="CopyToClipboard('tag18535');return false;" class="tag-decoration">nightly-2.5.1.5478</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/85d02b60fa70800b80cbbab7267281961db5b69c" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29681274186" target="_blank">2026-07-19 09:16:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8617" onclick="CopyToClipboard('tag8617');return false;" class="tag-decoration">release</div><div id="tag4044" onclick="CopyToClipboard('tag4044');return false;" class="tag-decoration">release-263fbf8</div><div id="tag29199" onclick="CopyToClipboard('tag29199');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/263fbf84bcc83b48c81b8c47a9a9b447a05b87f2" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29681269655" target="_blank">2026-07-19 09:15:51</a></td></tr>
<tr><td><div id="tag16258" onclick="CopyToClipboard('tag16258');return false;" class="tag-decoration">testing</div><div id="tag13964" onclick="CopyToClipboard('tag13964');return false;" class="tag-decoration">testing-6b76ec1</div><div id="tag167" onclick="CopyToClipboard('tag167');return false;" class="tag-decoration">testing-2.5.1.5464</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/6b76ec1da2c8b92d5de35ebb501799695322e9c1" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29681261105" target="_blank">2026-07-19 09:15:33</a></td></tr>
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
