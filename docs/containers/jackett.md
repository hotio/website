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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30701" onclick="CopyToClipboard('tag30701');return false;" class="tag-decoration">release</div><div id="tag20465" onclick="CopyToClipboard('tag20465');return false;" class="tag-decoration">release-50a300c</div><div id="tag20938" onclick="CopyToClipboard('tag20938');return false;" class="tag-decoration">release-0.24.879</div><div id="tag14340" onclick="CopyToClipboard('tag14340');return false;" class="tag-decoration">release-v0</div><div id="tag26100" onclick="CopyToClipboard('tag26100');return false;" class="tag-decoration">release-v0.24</div><div id="tag10872" onclick="CopyToClipboard('tag10872');return false;" class="tag-decoration">release-v0.24.879</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/50a300ce51afa898f084ef21126599f6d01bc28f" target="_blank">Version update: 0.24.868 => 0.24.879</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21107485381" target="_blank">2026-01-18 06:37:58</a></td></tr>
<tr><td><div id="tag207" onclick="CopyToClipboard('tag207');return false;" class="tag-decoration">testing</div><div id="tag3462" onclick="CopyToClipboard('tag3462');return false;" class="tag-decoration">testing-37ab8cf</div><div id="tag28101" onclick="CopyToClipboard('tag28101');return false;" class="tag-decoration">testing-0.24.879</div><div id="tag17195" onclick="CopyToClipboard('tag17195');return false;" class="tag-decoration">testing-v0</div><div id="tag24830" onclick="CopyToClipboard('tag24830');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15454" onclick="CopyToClipboard('tag15454');return false;" class="tag-decoration">testing-v0.24.879</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/37ab8cf7d5d40f587d6534c510e1074743842c51" target="_blank">Version update: 0.24.868 => 0.24.879</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21107485886" target="_blank">2026-01-18 06:38:05</a></td></tr>
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
