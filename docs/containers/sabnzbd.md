---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18519" onclick="CopyToClipboard('tag18519');return false;" class="tag-decoration">nightly</div><div id="tag5328" onclick="CopyToClipboard('tag5328');return false;" class="tag-decoration">nightly-94785f4</div><div id="tag8957" onclick="CopyToClipboard('tag8957');return false;" class="tag-decoration">nightly-d6474cb695956ea9830ece6c673f9ed5a95281d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/94785f4f900b51e5917952d3617e6c76922c9d9c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31400874996" target="_blank">2026-08-10 14:56:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17734" onclick="CopyToClipboard('tag17734');return false;" class="tag-decoration">release</div><div id="tag2166" onclick="CopyToClipboard('tag2166');return false;" class="tag-decoration">release-2916138</div><div id="tag9232" onclick="CopyToClipboard('tag9232');return false;" class="tag-decoration">release-5.1.0</div><div id="tag4704" onclick="CopyToClipboard('tag4704');return false;" class="tag-decoration">release-v5</div><div id="tag19184" onclick="CopyToClipboard('tag19184');return false;" class="tag-decoration">release-v5.1</div><div id="tag11208" onclick="CopyToClipboard('tag11208');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2916138071676b34ce6eca981b052a531e8495c0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390982584" target="_blank">2026-08-10 13:03:40</a></td></tr>
<tr><td><div id="tag23876" onclick="CopyToClipboard('tag23876');return false;" class="tag-decoration">testing</div><div id="tag27053" onclick="CopyToClipboard('tag27053');return false;" class="tag-decoration">testing-548e80e</div><div id="tag9768" onclick="CopyToClipboard('tag9768');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag11521" onclick="CopyToClipboard('tag11521');return false;" class="tag-decoration">testing-v5</div><div id="tag26621" onclick="CopyToClipboard('tag26621');return false;" class="tag-decoration">testing-v5.1</div><div id="tag25681" onclick="CopyToClipboard('tag25681');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/548e80e4667e44fbaf1cbc46cbad2e8a8a29718f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390988136" target="_blank">2026-08-10 13:03:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
