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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19622" onclick="CopyToClipboard('tag19622');return false;" class="tag-decoration">v2</div><div id="tag1352" onclick="CopyToClipboard('tag1352');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag11236" onclick="CopyToClipboard('tag11236');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag15101" onclick="CopyToClipboard('tag15101');return false;" class="tag-decoration">v2-v2</div><div id="tag4557" onclick="CopyToClipboard('tag4557');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8834" onclick="CopyToClipboard('tag8834');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag6769" onclick="CopyToClipboard('tag6769');return false;" class="tag-decoration">v2-develop</div><div id="tag9092" onclick="CopyToClipboard('tag9092');return false;" class="tag-decoration">v2-develop-0c6a4a0</div><div id="tag24335" onclick="CopyToClipboard('tag24335');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag16148" onclick="CopyToClipboard('tag16148');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14723" onclick="CopyToClipboard('tag14723');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31708" onclick="CopyToClipboard('tag31708');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0c6a4a07e3d0b0973b36f84e4ca47065db885838" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931444565" target="_blank">2026-05-15 17:20:26</a></td></tr>
<tr><td><div id="tag25733" onclick="CopyToClipboard('tag25733');return false;" class="tag-decoration">v3</div><div id="tag32506" onclick="CopyToClipboard('tag32506');return false;" class="tag-decoration">v3-a468baa</div><div id="tag20323" onclick="CopyToClipboard('tag20323');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag142" onclick="CopyToClipboard('tag142');return false;" class="tag-decoration">v3-v3</div><div id="tag17417" onclick="CopyToClipboard('tag17417');return false;" class="tag-decoration">v3-v3.3</div><div id="tag15997" onclick="CopyToClipboard('tag15997');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a468baab1ae75ae7d797f0eadd79c98d67fe15cd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442785" target="_blank">2026-05-15 17:20:24</a></td></tr>
<tr><td><div id="tag9330" onclick="CopyToClipboard('tag9330');return false;" class="tag-decoration">v3-develop</div><div id="tag20952" onclick="CopyToClipboard('tag20952');return false;" class="tag-decoration">v3-develop-5c65da0</div><div id="tag16761" onclick="CopyToClipboard('tag16761');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag18959" onclick="CopyToClipboard('tag18959');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15009" onclick="CopyToClipboard('tag15009');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3475" onclick="CopyToClipboard('tag3475');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c65da042eb95e80238164f3b96da790df4653ce" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442401" target="_blank">2026-05-15 17:20:24</a></td></tr>
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
