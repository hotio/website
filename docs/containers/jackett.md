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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18141" onclick="CopyToClipboard('tag18141');return false;" class="tag-decoration">release</div><div id="tag1612" onclick="CopyToClipboard('tag1612');return false;" class="tag-decoration">release-9680b80</div><div id="tag32207" onclick="CopyToClipboard('tag32207');return false;" class="tag-decoration">release-0.24.1356</div><div id="tag9863" onclick="CopyToClipboard('tag9863');return false;" class="tag-decoration">release-v0</div><div id="tag9746" onclick="CopyToClipboard('tag9746');return false;" class="tag-decoration">release-v0.24</div><div id="tag25960" onclick="CopyToClipboard('tag25960');return false;" class="tag-decoration">release-v0.24.1356</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9680b80d763f7203142716b046f891064804d061" target="_blank">Version update: 0.24.1350 => 0.24.1356</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23040014256" target="_blank">2026-03-13 07:01:23</a></td></tr>
<tr><td><div id="tag18436" onclick="CopyToClipboard('tag18436');return false;" class="tag-decoration">testing</div><div id="tag17062" onclick="CopyToClipboard('tag17062');return false;" class="tag-decoration">testing-0a4eed1</div><div id="tag8372" onclick="CopyToClipboard('tag8372');return false;" class="tag-decoration">testing-0.24.1367</div><div id="tag14982" onclick="CopyToClipboard('tag14982');return false;" class="tag-decoration">testing-v0</div><div id="tag13952" onclick="CopyToClipboard('tag13952');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2310" onclick="CopyToClipboard('tag2310');return false;" class="tag-decoration">testing-v0.24.1367</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0a4eed160d873ea56edd620a079712bddfa70df2" target="_blank">Version update: 0.24.1356 => 0.24.1367</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23082793694" target="_blank">2026-03-14 06:55:27</a></td></tr>
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
