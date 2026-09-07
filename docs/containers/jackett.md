---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29587" onclick="CopyToClipboard('tag29587');return false;" class="tag-decoration">release</div><div id="tag15851" onclick="CopyToClipboard('tag15851');return false;" class="tag-decoration">release-7fed607</div><div id="tag980" onclick="CopyToClipboard('tag980');return false;" class="tag-decoration">release-0.24.2544</div><div id="tag17756" onclick="CopyToClipboard('tag17756');return false;" class="tag-decoration">release-v0</div><div id="tag93" onclick="CopyToClipboard('tag93');return false;" class="tag-decoration">release-v0.24</div><div id="tag16394" onclick="CopyToClipboard('tag16394');return false;" class="tag-decoration">release-v0.24.2544</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/7fed607fc5e72712ed43c1cf09f082a0e2622de7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34115073101" target="_blank">2026-09-07 11:08:33</a></td></tr>
<tr><td><div id="tag31886" onclick="CopyToClipboard('tag31886');return false;" class="tag-decoration">testing</div><div id="tag17490" onclick="CopyToClipboard('tag17490');return false;" class="tag-decoration">testing-6823fe7</div><div id="tag2657" onclick="CopyToClipboard('tag2657');return false;" class="tag-decoration">testing-0.24.2544</div><div id="tag16528" onclick="CopyToClipboard('tag16528');return false;" class="tag-decoration">testing-v0</div><div id="tag26796" onclick="CopyToClipboard('tag26796');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13465" onclick="CopyToClipboard('tag13465');return false;" class="tag-decoration">testing-v0.24.2544</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6823fe75d093c34f71e5369dc61954e0992bd1eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34115070670" target="_blank">2026-09-07 11:08:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
