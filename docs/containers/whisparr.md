---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1901" onclick="CopyToClipboard('tag1901');return false;" class="tag-decoration">v2</div><div id="tag352" onclick="CopyToClipboard('tag352');return false;" class="tag-decoration">v2-5239dde</div><div id="tag15141" onclick="CopyToClipboard('tag15141');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag1103" onclick="CopyToClipboard('tag1103');return false;" class="tag-decoration">v2-v2</div><div id="tag2712" onclick="CopyToClipboard('tag2712');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7664" onclick="CopyToClipboard('tag7664');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5239dde3f330c6dcf880592b4fbb9607a06640b6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931441459" target="_blank">2026-05-15 17:20:23</a></td></tr>
<tr><td><div id="tag10259" onclick="CopyToClipboard('tag10259');return false;" class="tag-decoration">v2-develop</div><div id="tag25370" onclick="CopyToClipboard('tag25370');return false;" class="tag-decoration">v2-develop-0c6a4a0</div><div id="tag25139" onclick="CopyToClipboard('tag25139');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag14471" onclick="CopyToClipboard('tag14471');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag16658" onclick="CopyToClipboard('tag16658');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12855" onclick="CopyToClipboard('tag12855');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0c6a4a07e3d0b0973b36f84e4ca47065db885838" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931444565" target="_blank">2026-05-15 17:20:26</a></td></tr>
<tr><td><div id="tag12671" onclick="CopyToClipboard('tag12671');return false;" class="tag-decoration">v3</div><div id="tag10755" onclick="CopyToClipboard('tag10755');return false;" class="tag-decoration">v3-a468baa</div><div id="tag30716" onclick="CopyToClipboard('tag30716');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag20989" onclick="CopyToClipboard('tag20989');return false;" class="tag-decoration">v3-v3</div><div id="tag14605" onclick="CopyToClipboard('tag14605');return false;" class="tag-decoration">v3-v3.3</div><div id="tag15468" onclick="CopyToClipboard('tag15468');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a468baab1ae75ae7d797f0eadd79c98d67fe15cd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442785" target="_blank">2026-05-15 17:20:24</a></td></tr>
<tr><td><div id="tag37" onclick="CopyToClipboard('tag37');return false;" class="tag-decoration">v3-develop</div><div id="tag5665" onclick="CopyToClipboard('tag5665');return false;" class="tag-decoration">v3-develop-5c65da0</div><div id="tag8550" onclick="CopyToClipboard('tag8550');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag5614" onclick="CopyToClipboard('tag5614');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2345" onclick="CopyToClipboard('tag2345');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26292" onclick="CopyToClipboard('tag26292');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c65da042eb95e80238164f3b96da790df4653ce" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442401" target="_blank">2026-05-15 17:20:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
