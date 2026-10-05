---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8144" onclick="CopyToClipboard('tag8144');return false;" class="tag-decoration">nightly</div><div id="tag21411" onclick="CopyToClipboard('tag21411');return false;" class="tag-decoration">nightly-a72d206</div><div id="tag21704" onclick="CopyToClipboard('tag21704');return false;" class="tag-decoration">nightly-e00d6856202c5aa0ba3000bf802d52c3bdeed0c9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a72d206e5cffef48f43855d510fa7d7a7e0dc4ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37335141235" target="_blank">2026-10-05 15:43:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29287" onclick="CopyToClipboard('tag29287');return false;" class="tag-decoration">release</div><div id="tag15096" onclick="CopyToClipboard('tag15096');return false;" class="tag-decoration">release-9e12795</div><div id="tag8546" onclick="CopyToClipboard('tag8546');return false;" class="tag-decoration">release-3.5.0</div><div id="tag12332" onclick="CopyToClipboard('tag12332');return false;" class="tag-decoration">release-v3</div><div id="tag31891" onclick="CopyToClipboard('tag31891');return false;" class="tag-decoration">release-v3.5</div><div id="tag14526" onclick="CopyToClipboard('tag14526');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9e12795b7bc869d5480cc84a216e1c36e495a21c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/36930378510" target="_blank">2026-10-01 21:41:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
