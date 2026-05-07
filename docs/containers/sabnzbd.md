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
<tr><td><div id="tag16132" onclick="CopyToClipboard('tag16132');return false;" class="tag-decoration">nightly</div><div id="tag13478" onclick="CopyToClipboard('tag13478');return false;" class="tag-decoration">nightly-879dc58</div><div id="tag28684" onclick="CopyToClipboard('tag28684');return false;" class="tag-decoration">nightly-9d7ab5368590daab11723428c7e73e26c8cae055</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/879dc58ff2fd1df5f4891ec4d5ff219ded2cf73e" target="_blank">Version update: 95f3b9fcc1cf3e11ff210c71b94f27b0daff075d => 9d7ab5368590daab11723428c7e73e26c8cae055</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25483110962" target="_blank">2026-05-07 07:49:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24991" onclick="CopyToClipboard('tag24991');return false;" class="tag-decoration">release</div><div id="tag30776" onclick="CopyToClipboard('tag30776');return false;" class="tag-decoration">release-83955ca</div><div id="tag16172" onclick="CopyToClipboard('tag16172');return false;" class="tag-decoration">release-5.0.1</div><div id="tag15974" onclick="CopyToClipboard('tag15974');return false;" class="tag-decoration">release-v5</div><div id="tag16705" onclick="CopyToClipboard('tag16705');return false;" class="tag-decoration">release-v5.0</div><div id="tag21829" onclick="CopyToClipboard('tag21829');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83955ca245d4949e4c58d3e96c9199ee430f62b8" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234298284" target="_blank">2026-05-01 21:38:26</a></td></tr>
<tr><td><div id="tag26174" onclick="CopyToClipboard('tag26174');return false;" class="tag-decoration">testing</div><div id="tag4457" onclick="CopyToClipboard('tag4457');return false;" class="tag-decoration">testing-820aa86</div><div id="tag28570" onclick="CopyToClipboard('tag28570');return false;" class="tag-decoration">testing-5.0.1</div><div id="tag20277" onclick="CopyToClipboard('tag20277');return false;" class="tag-decoration">testing-v5</div><div id="tag701" onclick="CopyToClipboard('tag701');return false;" class="tag-decoration">testing-v5.0</div><div id="tag29790" onclick="CopyToClipboard('tag29790');return false;" class="tag-decoration">testing-v5.0.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/820aa86f551da121c7caec9fac9120e6efe60d4a" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234299007" target="_blank">2026-05-01 21:38:28</a></td></tr>
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
