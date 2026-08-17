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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4248" onclick="CopyToClipboard('tag4248');return false;" class="tag-decoration">v2</div><div id="tag24933" onclick="CopyToClipboard('tag24933');return false;" class="tag-decoration">v2-48e736e</div><div id="tag26445" onclick="CopyToClipboard('tag26445');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag27412" onclick="CopyToClipboard('tag27412');return false;" class="tag-decoration">v2-v2</div><div id="tag20511" onclick="CopyToClipboard('tag20511');return false;" class="tag-decoration">v2-v2.2</div><div id="tag20235" onclick="CopyToClipboard('tag20235');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag11279" onclick="CopyToClipboard('tag11279');return false;" class="tag-decoration">v2-develop</div><div id="tag30151" onclick="CopyToClipboard('tag30151');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag21261" onclick="CopyToClipboard('tag21261');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag32430" onclick="CopyToClipboard('tag32430');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2743" onclick="CopyToClipboard('tag2743');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21770" onclick="CopyToClipboard('tag21770');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag28131" onclick="CopyToClipboard('tag28131');return false;" class="tag-decoration">v3</div><div id="tag20537" onclick="CopyToClipboard('tag20537');return false;" class="tag-decoration">v3-bdc773c</div><div id="tag30552" onclick="CopyToClipboard('tag30552');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag21049" onclick="CopyToClipboard('tag21049');return false;" class="tag-decoration">v3-v3</div><div id="tag25945" onclick="CopyToClipboard('tag25945');return false;" class="tag-decoration">v3-v3.3</div><div id="tag16996" onclick="CopyToClipboard('tag16996');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/bdc773cd0e41dc736bf61c9e8336c34985cde5c3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31908686087" target="_blank">2026-08-15 21:10:08</a></td></tr>
<tr><td><div id="tag14221" onclick="CopyToClipboard('tag14221');return false;" class="tag-decoration">v3-develop</div><div id="tag21443" onclick="CopyToClipboard('tag21443');return false;" class="tag-decoration">v3-develop-c7ab2f0</div><div id="tag3526" onclick="CopyToClipboard('tag3526');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1118</div><div id="tag21217" onclick="CopyToClipboard('tag21217');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20039" onclick="CopyToClipboard('tag20039');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7189" onclick="CopyToClipboard('tag7189');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c7ab2f0fee288260a3addff5bbbf9877b2c0ff71" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31987252577" target="_blank">2026-08-17 02:11:56</a></td></tr>
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
