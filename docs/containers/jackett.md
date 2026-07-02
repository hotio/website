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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26715" onclick="CopyToClipboard('tag26715');return false;" class="tag-decoration">release</div><div id="tag14434" onclick="CopyToClipboard('tag14434');return false;" class="tag-decoration">release-71d8752</div><div id="tag10148" onclick="CopyToClipboard('tag10148');return false;" class="tag-decoration">release-0.24.2158</div><div id="tag21141" onclick="CopyToClipboard('tag21141');return false;" class="tag-decoration">release-v0</div><div id="tag5173" onclick="CopyToClipboard('tag5173');return false;" class="tag-decoration">release-v0.24</div><div id="tag3949" onclick="CopyToClipboard('tag3949');return false;" class="tag-decoration">release-v0.24.2158</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/71d8752dd3d8c238d4a9d0936bef77df282171c5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28600483469" target="_blank">2026-07-02 15:07:34</a></td></tr>
<tr><td><div id="tag28067" onclick="CopyToClipboard('tag28067');return false;" class="tag-decoration">testing</div><div id="tag15949" onclick="CopyToClipboard('tag15949');return false;" class="tag-decoration">testing-14ab5c2</div><div id="tag15453" onclick="CopyToClipboard('tag15453');return false;" class="tag-decoration">testing-0.24.2158</div><div id="tag10715" onclick="CopyToClipboard('tag10715');return false;" class="tag-decoration">testing-v0</div><div id="tag6555" onclick="CopyToClipboard('tag6555');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14226" onclick="CopyToClipboard('tag14226');return false;" class="tag-decoration">testing-v0.24.2158</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/14ab5c25ace24d317a2a930ebe911132e4ca8796" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28600485748" target="_blank">2026-07-02 15:07:38</a></td></tr>
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
