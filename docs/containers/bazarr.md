---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28945" onclick="CopyToClipboard('tag28945');return false;" class="tag-decoration">nightly</div><div id="tag8937" onclick="CopyToClipboard('tag8937');return false;" class="tag-decoration">nightly-b1268a9</div><div id="tag23607" onclick="CopyToClipboard('tag23607');return false;" class="tag-decoration">nightly-1.6.1-beta.37</div><div id="tag2871" onclick="CopyToClipboard('tag2871');return false;" class="tag-decoration">nightly-v1</div><div id="tag27931" onclick="CopyToClipboard('tag27931');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag25901" onclick="CopyToClipboard('tag25901');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b1268a90113497f652b5555100836844b3774fff" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33947014694" target="_blank">2026-09-05 05:21:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31276" onclick="CopyToClipboard('tag31276');return false;" class="tag-decoration">release</div><div id="tag12112" onclick="CopyToClipboard('tag12112');return false;" class="tag-decoration">release-e318e9e</div><div id="tag32407" onclick="CopyToClipboard('tag32407');return false;" class="tag-decoration">release-1.6.0</div><div id="tag28013" onclick="CopyToClipboard('tag28013');return false;" class="tag-decoration">release-v1</div><div id="tag21677" onclick="CopyToClipboard('tag21677');return false;" class="tag-decoration">release-v1.6</div><div id="tag21110" onclick="CopyToClipboard('tag21110');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e318e9e5ac629322c94481ddb0b5c5b6cf901cfe" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33969746366" target="_blank">2026-09-05 13:43:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
