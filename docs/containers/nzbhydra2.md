---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2326" onclick="CopyToClipboard('tag2326');return false;" class="tag-decoration">release</div><div id="tag6307" onclick="CopyToClipboard('tag6307');return false;" class="tag-decoration">release-ef56a30</div><div id="tag7666" onclick="CopyToClipboard('tag7666');return false;" class="tag-decoration">release-9.3.3</div><div id="tag19480" onclick="CopyToClipboard('tag19480');return false;" class="tag-decoration">release-v9</div><div id="tag18169" onclick="CopyToClipboard('tag18169');return false;" class="tag-decoration">release-v9.3</div><div id="tag26834" onclick="CopyToClipboard('tag26834');return false;" class="tag-decoration">release-v9.3.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ef56a301128cf8b086a71f8e6af1659382ddafb2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45327474132" target="_blank">2026-11-24 04:35:39</a></td></tr>
<tr><td><div id="tag21493" onclick="CopyToClipboard('tag21493');return false;" class="tag-decoration">testing</div><div id="tag7976" onclick="CopyToClipboard('tag7976');return false;" class="tag-decoration">testing-7c46901</div><div id="tag3971" onclick="CopyToClipboard('tag3971');return false;" class="tag-decoration">testing-9.3.3</div><div id="tag755" onclick="CopyToClipboard('tag755');return false;" class="tag-decoration">testing-v9</div><div id="tag18260" onclick="CopyToClipboard('tag18260');return false;" class="tag-decoration">testing-v9.3</div><div id="tag13363" onclick="CopyToClipboard('tag13363');return false;" class="tag-decoration">testing-v9.3.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7c4690145c71f3446e4395952d65cfa1921c9d0f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44791440928" target="_blank">2026-11-20 18:17:53</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
