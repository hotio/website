---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6550" onclick="CopyToClipboard('tag6550');return false;" class="tag-decoration">nightly</div><div id="tag24298" onclick="CopyToClipboard('tag24298');return false;" class="tag-decoration">nightly-39ad929</div><div id="tag6626" onclick="CopyToClipboard('tag6626');return false;" class="tag-decoration">nightly-7.0.0.10788</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/39ad92985061948c7c68484c79a150dfd88441e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39151080973" target="_blank">2026-10-18 17:45:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21107" onclick="CopyToClipboard('tag21107');return false;" class="tag-decoration">release</div><div id="tag6799" onclick="CopyToClipboard('tag6799');return false;" class="tag-decoration">release-b88a866</div><div id="tag8063" onclick="CopyToClipboard('tag8063');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/b88a866ba0b0ed94f20a3ea6f33676c54d83afc6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39505127722" target="_blank">2026-10-20 22:02:33</a></td></tr>
<tr><td><div id="tag24548" onclick="CopyToClipboard('tag24548');return false;" class="tag-decoration">testing</div><div id="tag17162" onclick="CopyToClipboard('tag17162');return false;" class="tag-decoration">testing-f7f50fb</div><div id="tag23069" onclick="CopyToClipboard('tag23069');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/f7f50fbf15ba990d1e3fd35e30353f76d736be27" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/39505129343" target="_blank">2026-10-20 22:02:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
