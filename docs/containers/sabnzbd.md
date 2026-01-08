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
<tr><td><div id="tag26460" onclick="CopyToClipboard('tag26460');return false;" class="tag-decoration">nightly</div><div id="tag18721" onclick="CopyToClipboard('tag18721');return false;" class="tag-decoration">nightly-4d73c3e9c03b7e79ce408bdcf05fce03ca7a059f</div><div id="tag14324" onclick="CopyToClipboard('tag14324');return false;" class="tag-decoration">nightly-e1eac66</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e1eac666b233bdaa2a9346375529e35f3bdf2764" target="_blank">Version update: 17dcff49b25aaf3988bbc28f46175981908f9211 => 4d73c3e9c03b7e79ce408bdcf05fce03ca7a059f</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20820292327" target="_blank">2026-01-08 14:30:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5202" onclick="CopyToClipboard('tag5202');return false;" class="tag-decoration">release</div><div id="tag17525" onclick="CopyToClipboard('tag17525');return false;" class="tag-decoration">release-4.5.5</div><div id="tag32335" onclick="CopyToClipboard('tag32335');return false;" class="tag-decoration">release-bc91289</div><div id="tag26366" onclick="CopyToClipboard('tag26366');return false;" class="tag-decoration">release-v4</div><div id="tag4594" onclick="CopyToClipboard('tag4594');return false;" class="tag-decoration">release-v4.5</div><div id="tag5887" onclick="CopyToClipboard('tag5887');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bc912893ddc6f35e1b054aa1ad97d1e62a3a6392" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20770107223" target="_blank">2026-01-07 03:57:52</a></td></tr>
<tr><td><div id="tag23454" onclick="CopyToClipboard('tag23454');return false;" class="tag-decoration">testing</div><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag11873" onclick="CopyToClipboard('tag11873');return false;" class="tag-decoration">testing-4f97828</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4f978280f67fa1d385dd5c187563f94ee0ef6c29" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20770107513" target="_blank">2026-01-07 03:57:53</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

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
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
