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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14047" onclick="CopyToClipboard('tag14047');return false;" class="tag-decoration">release</div><div id="tag18235" onclick="CopyToClipboard('tag18235');return false;" class="tag-decoration">release-bca3470</div><div id="tag5462" onclick="CopyToClipboard('tag5462');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag8342" onclick="CopyToClipboard('tag8342');return false;" class="tag-decoration">release-v0</div><div id="tag25780" onclick="CopyToClipboard('tag25780');return false;" class="tag-decoration">release-v0.24</div><div id="tag7902" onclick="CopyToClipboard('tag7902');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bca3470e5fbdd959e4abbced2489f52660ab35ce" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25701773849" target="_blank">2026-05-11 22:45:31</a></td></tr>
<tr><td><div id="tag12107" onclick="CopyToClipboard('tag12107');return false;" class="tag-decoration">testing</div><div id="tag12566" onclick="CopyToClipboard('tag12566');return false;" class="tag-decoration">testing-98adf29</div><div id="tag7047" onclick="CopyToClipboard('tag7047');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag30512" onclick="CopyToClipboard('tag30512');return false;" class="tag-decoration">testing-v0</div><div id="tag6351" onclick="CopyToClipboard('tag6351');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28830" onclick="CopyToClipboard('tag28830');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/98adf292c53ed16320cf5232dc3e74fe3cccd7bc" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25707136161" target="_blank">2026-05-12 01:14:10</a></td></tr>
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
