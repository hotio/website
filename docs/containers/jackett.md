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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13430" onclick="CopyToClipboard('tag13430');return false;" class="tag-decoration">release</div><div id="tag7607" onclick="CopyToClipboard('tag7607');return false;" class="tag-decoration">release-8175ceb</div><div id="tag32016" onclick="CopyToClipboard('tag32016');return false;" class="tag-decoration">release-0.24.1947</div><div id="tag19157" onclick="CopyToClipboard('tag19157');return false;" class="tag-decoration">release-v0</div><div id="tag11092" onclick="CopyToClipboard('tag11092');return false;" class="tag-decoration">release-v0.24</div><div id="tag16503" onclick="CopyToClipboard('tag16503');return false;" class="tag-decoration">release-v0.24.1947</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8175ceb22a3e60bf781e657fe062c902eaf8e09d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26388093016" target="_blank">2026-05-25 07:06:07</a></td></tr>
<tr><td><div id="tag20018" onclick="CopyToClipboard('tag20018');return false;" class="tag-decoration">testing</div><div id="tag24331" onclick="CopyToClipboard('tag24331');return false;" class="tag-decoration">testing-ea70b04</div><div id="tag17921" onclick="CopyToClipboard('tag17921');return false;" class="tag-decoration">testing-0.24.1926</div><div id="tag32259" onclick="CopyToClipboard('tag32259');return false;" class="tag-decoration">testing-v0</div><div id="tag4291" onclick="CopyToClipboard('tag4291');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14576" onclick="CopyToClipboard('tag14576');return false;" class="tag-decoration">testing-v0.24.1926</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ea70b04f11e414fe46e4e24a2fd45c38143541ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26354053216" target="_blank">2026-05-24 06:30:21</a></td></tr>
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
