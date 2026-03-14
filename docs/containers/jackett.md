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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12705" onclick="CopyToClipboard('tag12705');return false;" class="tag-decoration">release</div><div id="tag7285" onclick="CopyToClipboard('tag7285');return false;" class="tag-decoration">release-b6fe794</div><div id="tag12179" onclick="CopyToClipboard('tag12179');return false;" class="tag-decoration">release-0.24.1367</div><div id="tag29446" onclick="CopyToClipboard('tag29446');return false;" class="tag-decoration">release-v0</div><div id="tag22037" onclick="CopyToClipboard('tag22037');return false;" class="tag-decoration">release-v0.24</div><div id="tag4485" onclick="CopyToClipboard('tag4485');return false;" class="tag-decoration">release-v0.24.1367</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b6fe794de4fb99c7be126ead94e044df2c3c55bc" target="_blank">Version update: 0.24.1356 => 0.24.1367</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23082793259" target="_blank">2026-03-14 06:55:24</a></td></tr>
<tr><td><div id="tag28239" onclick="CopyToClipboard('tag28239');return false;" class="tag-decoration">testing</div><div id="tag2934" onclick="CopyToClipboard('tag2934');return false;" class="tag-decoration">testing-0a4eed1</div><div id="tag29335" onclick="CopyToClipboard('tag29335');return false;" class="tag-decoration">testing-0.24.1367</div><div id="tag21876" onclick="CopyToClipboard('tag21876');return false;" class="tag-decoration">testing-v0</div><div id="tag26629" onclick="CopyToClipboard('tag26629');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3916" onclick="CopyToClipboard('tag3916');return false;" class="tag-decoration">testing-v0.24.1367</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0a4eed160d873ea56edd620a079712bddfa70df2" target="_blank">Version update: 0.24.1356 => 0.24.1367</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23082793694" target="_blank">2026-03-14 06:55:27</a></td></tr>
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
