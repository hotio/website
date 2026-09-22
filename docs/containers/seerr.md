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
<tr><td><div id="tag17528" onclick="CopyToClipboard('tag17528');return false;" class="tag-decoration">nightly</div><div id="tag15185" onclick="CopyToClipboard('tag15185');return false;" class="tag-decoration">nightly-b023266</div><div id="tag4211" onclick="CopyToClipboard('tag4211');return false;" class="tag-decoration">nightly-794743a45f17e3d6aba06d68e1716e8b15146673</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b023266712cccb360b85051691af63a21feb13b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35712017655" target="_blank">2026-09-22 09:43:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8801" onclick="CopyToClipboard('tag8801');return false;" class="tag-decoration">release</div><div id="tag25930" onclick="CopyToClipboard('tag25930');return false;" class="tag-decoration">release-6fe2059</div><div id="tag26835" onclick="CopyToClipboard('tag26835');return false;" class="tag-decoration">release-3.4.1</div><div id="tag11987" onclick="CopyToClipboard('tag11987');return false;" class="tag-decoration">release-v3</div><div id="tag29657" onclick="CopyToClipboard('tag29657');return false;" class="tag-decoration">release-v3.4</div><div id="tag16645" onclick="CopyToClipboard('tag16645');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/6fe205908b298ce010b34266c624b500a5da3c07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35378761782" target="_blank">2026-09-18 18:11:53</a></td></tr>
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
