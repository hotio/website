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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1819" onclick="CopyToClipboard('tag1819');return false;" class="tag-decoration">release</div><div id="tag11371" onclick="CopyToClipboard('tag11371');return false;" class="tag-decoration">release-bf76cbc</div><div id="tag3144" onclick="CopyToClipboard('tag3144');return false;" class="tag-decoration">release-0.24.2800</div><div id="tag23038" onclick="CopyToClipboard('tag23038');return false;" class="tag-decoration">release-v0</div><div id="tag9320" onclick="CopyToClipboard('tag9320');return false;" class="tag-decoration">release-v0.24</div><div id="tag3035" onclick="CopyToClipboard('tag3035');return false;" class="tag-decoration">release-v0.24.2800</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bf76cbc013beedc8441de00b29da0374e34863b7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37583139000" target="_blank">2026-10-07 06:43:52</a></td></tr>
<tr><td><div id="tag5118" onclick="CopyToClipboard('tag5118');return false;" class="tag-decoration">testing</div><div id="tag27314" onclick="CopyToClipboard('tag27314');return false;" class="tag-decoration">testing-5e57666</div><div id="tag8533" onclick="CopyToClipboard('tag8533');return false;" class="tag-decoration">testing-0.24.2800</div><div id="tag15329" onclick="CopyToClipboard('tag15329');return false;" class="tag-decoration">testing-v0</div><div id="tag26752" onclick="CopyToClipboard('tag26752');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28375" onclick="CopyToClipboard('tag28375');return false;" class="tag-decoration">testing-v0.24.2800</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5e57666c46d0021c2bcbf371c1dd78b79145a5c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37583144467" target="_blank">2026-10-07 06:43:55</a></td></tr>
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
