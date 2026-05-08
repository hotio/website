---
hide:
  - toc
title: hotio/seerr
status: new
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
<tr><td><div id="tag15304" onclick="CopyToClipboard('tag15304');return false;" class="tag-decoration">nightly</div><div id="tag12204" onclick="CopyToClipboard('tag12204');return false;" class="tag-decoration">nightly-af5b13f</div><div id="tag26965" onclick="CopyToClipboard('tag26965');return false;" class="tag-decoration">nightly-99f8520f481bc6e7a87e2353365770cb24a2cb9f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/af5b13f18d4dfeafb73c562ddb58463fc08b57f8" target="_blank">Version update: 788311aa026aa676802fab7f52377a11fa232ad4 => 99f8520f481bc6e7a87e2353365770cb24a2cb9f</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25556682592" target="_blank">2026-05-08 12:54:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19058" onclick="CopyToClipboard('tag19058');return false;" class="tag-decoration">release</div><div id="tag21149" onclick="CopyToClipboard('tag21149');return false;" class="tag-decoration">release-9c55a41</div><div id="tag3124" onclick="CopyToClipboard('tag3124');return false;" class="tag-decoration">release-3.2.0</div><div id="tag293" onclick="CopyToClipboard('tag293');return false;" class="tag-decoration">release-v3</div><div id="tag8747" onclick="CopyToClipboard('tag8747');return false;" class="tag-decoration">release-v3.2</div><div id="tag23918" onclick="CopyToClipboard('tag23918');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9c55a41ada44976f1210e4556c259dc639618ab5" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24552144038" target="_blank">2026-04-17 06:54:30</a></td></tr>
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
